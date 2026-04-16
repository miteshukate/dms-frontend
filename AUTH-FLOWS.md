# Authentication System - Visual Flow Diagrams

## 1. Application Startup Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ App Loads                                                       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│ AuthProvider Component                                          │
│ - Initializes auth state                                       │
│ - useEffect runs on mount                                      │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────────┐
        │ Check localStorage for tokens   │
        └────────┬───────────────┬────────┘
                 │               │
         NO  ────┘               └──── YES
         │                            │
         │                            ▼
         │                   ┌────────────────────┐
         │                   │ Token exists?      │
         │                   │ - accessToken      │
         │                   │ - refreshToken     │
         │                   └────────┬───────────┘
         │                            │
         │                            ▼
         │                   ┌────────────────────┐
         │                   │ Call getMe() to    │
         │                   │ verify token valid  │
         │                   └────────┬───────────┘
         │                            │
         │              ┌─────────────┴──────────────┐
         │              │                            │
         │          SUCCESS                       FAILS
         │              │                            │
         │              ▼                            ▼
         │   ┌────────────────┐         ┌──────────────────────┐
         │   │ Set user in    │         │ Clear localStorage   │
         │   │ context        │         │ Set isAuthenticated  │
         │   │ Set            │         │ = false              │
         │   │ isAuthenticated│         │ Set isLoading = false│
         │   │ = true         │         └──────────────────────┘
         │   └────────┬───────┘                     │
         │            │                             │
         └────────────┼─────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────────┐
        │ Set isLoading = false           │
        │ Render app                      │
        └─────────────────────────────────┘
```

## 2. Login Flow

```
User on /login page
        │
        ▼
┌──────────────────┐
│ Enter credentials│
│ - email         │
│ - password      │
└────────┬─────────┘
         │
         ▼
   ┌──────────────────────┐
   │ Click "Sign In"      │
   │ Form validation OK?  │
   └────┬──────────┬──────┘
        │          │
     NO │          │ YES
        ▼          ▼
    Error    ┌──────────────────────┐
    shown    │ setIsLoading = true  │
             │ Call AuthApi.login() │
             └────────┬─────────────┘
                      │
         ┌────────────┴────────────┐
         │                         │
      SUCCESS                    FAILURE
         │                         │
         ▼                         ▼
    ┌──────────────┐      ┌─────────────────┐
    │ Receive:     │      │ Display error   │
    │ - accessToken│      │ message         │
    │ - refreshToken
    │ - user obj   │      │ setIsLoading =  │
    └────┬─────────┘      │ false           │
         │                └─────────────────┘
         ▼
    ┌──────────────────────┐
    │ Store in:            │
    │ - localStorage       │
    │ - context state      │
    └────┬─────────────────┘
         │
         ▼
    ┌──────────────────────┐
    │ Redirect to:         │
    │ - Previous page OR   │
    │ - Dashboard (/)      │
    └──────────────────────┘
```

## 3. Protected Route Access Flow

```
User navigates to /files
         │
         ▼
┌────────────────────────────┐
│ ProtectedRoute component   │
│ checks isLoading           │
└────────┬─────────────┬─────┘
         │             │
      TRUE │             │ FALSE
         │             │
         ▼             ▼
    ┌─────────┐  ┌────────────────┐
    │ Show    │  │ Check          │
    │ loading │  │ isAuthenticated│
    │ spinner │  └────┬────────┬──┘
    └─────────┘       │        │
                   TRUE│       │FALSE
                      ▼       ▼
                  ┌──────┐  ┌──────────────────┐
                  │ Show │  │ Redirect to /login
                  │ page │  │ Preserve location
                  └──────┘  └──────────────────┘
```

## 4. API Request with Auto-Refresh Flow

```
Component calls API
(e.g., FilesApi.getFiles())
         │
         ▼
┌─────────────────────────────┐
│ Request Interceptor         │
│ - Get accessToken from      │
│   localStorage              │
│ - Add Authorization header  │
│   "Bearer {token}"          │
└────────┬────────────────────┘
         │
         ▼
    ┌─────────────┐
    │ Send request│
    │ to API      │
    └────┬────────┘
         │
         ▼
    ┌──────────────────┐
    │ Receive response │
    └────┬─────────────┘
         │
         ▼
    ┌────────────────────┐
    │ Response interceptor│
    │ Check status code  │
    └────┬───────┬───────┘
         │       │
      200-399  401
         │       │
         ▼       ▼
      OK    ┌─────────────────────┐
           │ Check if already    │
           │ refreshing token    │
           └────┬───────┬────────┘
                │       │
            NO  │       │ YES
                ▼       ▼
         ┌─────────┐  ┌──────────────┐
         │ Set     │  │ Queue request│
         │ is      │  │ to failedQ   │
         │ refresh │  │ Wait for     │
         │ ing=true│  │ refresh to   │
         └────┬────┘  │ complete    │
              │       └──────┬──────┘
              ▼              │
         ┌──────────────┐    │
         │ Call         │    │
         │ /auth/refresh│    │
         └────┬─────────┘    │
              │              │
    ┌─────────┴──┬──────────┐│
    │            │          ││
 SUCCESS      FAILURE   QUEUED
    │            │          ││
    ▼            ▼          │▼
   Store      Clear auth    │Process
   tokens     Redirect to   │failed queue
             /login        │Retry all
                          │requests
```

## 5. Logout Flow

```
User clicks "Sign out"
         │
         ▼
┌────────────────────────┐
│ handleLogout()         │
│ setIsLoading = true    │
└────────┬───────────────┘
         │
         ▼
┌────────────────────────┐
│ AuthApi.logout()       │
│ - Send refreshToken    │
│ - Server invalidates   │
│   token                │
└────┬───────────┬───────┘
     │           │
  SUCCESS      FAILURE
     │           │
     ▼           ▼
  OK       (Continue anyway)
     │           │
     └─────┬─────┘
           ▼
    ┌──────────────────┐
    │ clearAuth()      │
    │ - user = null    │
    │ - accessToken =  │
    │   null           │
    │ - refreshToken = │
    │   null           │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ localStorage:    │
    │ - Remove all     │
    │   auth keys      │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Navigate to      │
    │ /login           │
    └──────────────────┘
```

## 6. Token Refresh with Request Queue

```
Multiple concurrent requests fail with 401
                  │
         ┌────────┼────────┐
         ▼        ▼        ▼
    Req1  Req2  Req3
     401   401   401
         │        │        │
         └────────┼────────┘
                  ▼
    ┌────────────────────────────┐
    │ First 401 detected         │
    │ Set isRefreshing = true    │
    └────────┬───────────────────┘
             │
             ▼
    ┌────────────────────────────┐
    │ Call POST /auth/refresh    │
    │ - Send refreshToken        │
    │ - Get new accessToken      │
    └────────┬───────────────────┘
             │
    ┌────────┴──────────┐
    │                   │
 SUCCESS             FAILURE
    │                   │
    ▼                   ▼
Process            Clear auth
queue:             Redirect
- Update token     to /login
- Retry all        Reject all
  requests         queued req
  with new token   
  │
  ▼
Req1 ─────► 200 OK ✓
Req2 ─────► 200 OK ✓
Req3 ─────► 200 OK ✓
```

## 7. Component Interaction Tree

```
┌────────────────────────────────────┐
│ App.tsx                            │
│ (Provides AuthProvider)            │
└───────────┬────────────────────────┘
            │
            ▼
┌────────────────────────────────────┐
│ AuthProvider                       │
│ ├─ State: user, tokens, isLoading  │
│ ├─ Methods: login, logout, refresh │
│ └─ Effects: init auth on mount     │
└───────────┬────────────────────────┘
            │
    ┌───────┴────────┐
    ▼                ▼
┌─────────┐      ┌──────────────────┐
│ /login  │      │ ProtectedRoute   │
│ Page    │      │ ├─ Check auth    │
│         │      │ └─ Show/redirect │
└─────────┘      └────────┬─────────┘
                          │
                          ▼
                  ┌────────────────────┐
                  │ DMSLayout          │
                  │ ├─ DMSHeader       │
                  │ │ └─ useAuth()     │
                  │ ├─ DMSSidebar      │
                  │ └─ Routes/Pages    │
                  └────────────────────┘
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
       Dashboard    FileExplorer    SharedFiles
       (useAuth())  (useAuth())     (useAuth())
```

## 8. State Machine Diagram

```
┌─────────────────────────────────┐
│ INITIAL STATE                   │
│ isLoading=true, isAuth=false    │
│ (Checking stored tokens)        │
└────────────────┬────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
    ┌────────┐      ┌──────────┐
    │ NO     │      │ TOKENS   │
    │ TOKENS │      │ FOUND    │
    └────┬───┘      └────┬─────┘
         │               │
         ▼               ▼
    ┌──────────┐   ┌──────────────┐
    │ LOGGED   │   │ VERIFYING    │
    │ OUT      │   │ (calling     │
    │ READY    │   │ getMe())     │
    │ FOR      │   └──┬──────┬────┘
    │ LOGIN    │      │      │
    └──────────┘   PASS  FAIL
                     │      │
                     ▼      ▼
                 ┌────┐  ┌──────────┐
                 │AUTH│  │LOGGED OUT│
                 │ED  │  │ (clear   │
                 │    │  │ tokens)  │
                 └────┘  └──────────┘
                  ▲          │
                  │          │
    LOGIN ────────┘          └──► /login
    LOGOUT ────────────────►/login
```

---

## Summary

These diagrams show:
1. **Startup** - How auth is initialized when app loads
2. **Login** - Complete login process
3. **Route Protection** - How routes are protected
4. **API Requests** - How auto-refresh works transparently
5. **Logout** - Complete logout process
6. **Request Queue** - How concurrent requests are handled during token refresh
7. **Component Tree** - Component structure and useAuth() usage
8. **State Machine** - Authentication states and transitions

All diagrams use ASCII art for easy reference in markdown and plain text contexts.

