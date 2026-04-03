# Documentation of Las Vegas Roleplay - Website

All frontend is displayed in /artifacts/las-vegas-rp/src.


## Backend Documentation & Routes
```/api/health``` -> This is only for publishing state. When this does not return true, publishment/deployment will go to a standstill.
Example:
GET https://lvrp-draft.replit.app/api/health
<br>
Return: OK

```/api/postonly/update``` -> This will not respond if you try to POST/GET to it. This API Route only runs while building, this is not defined in /routes.ts as it is in /dist. This runs before each promote state to kill all running proccesses of the old version.

```/api/stats``` ->  This is the API to display and get the data from the LVRPU. This comes with a GET, to get the data most recently POSTed. The other type is POST, this will be authorized with a token (Auth Bearer).
POST Request Format:
```
POST /api/stats HTTP/1.1
Accept: */*
Accept-Encoding: deflate, gzip
User-Agent: Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36
Authorization: Bearer HIDDEN FOR SECURITY
Host: lvrp-draft.replit.app
Content-Type: application/json
Content-Length: 100

{
  "playersOnline": 39,
  "staffOnline": 3,
  "discordMembers": 20340,
  "serverStatus": "online"
}
```

```/api/directors/:userId/avatar``` -> GET, fill in the :userID with the person you want to search user ID. 
Sample of Return:
{
    "id": "1009544872845377597",
    "username": "jacob750",
    "displayName": "Jacob.",
    "avatarUrl": "https://cdn.discordapp.com/avatars/1009544872845377597/fff661d07437704b021ac5af51c76ca0.png?size=256"
}

## Features yet to come.
These are features on my To-Do list, and their functionality.

**Applications**
> This will be used to redirect people to the Google Forms respective to the department.


**Trailer/Video**
> This will be a trailer or video of LVRP. This is already built-in, I just need a video file. You can view the layout by going to: https://lvrp-draft.replit.app/?debug=true

### More soon

&copy; 2026 Las Vegas Roleplay. All Rights Reversed.




