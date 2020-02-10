# How the Web Works

Simple discussion on how the web works. While the theory is not essential in writing code,
it's beneficial to understand in the long run.

## Summary of Topics
- Client and Servers
- Internet Connection
- TCP/IP
- DNS
- HTTP

## Clients and Servers

- Clients are the typical web user's internet-connected devices and web-accessing software (ie. browser, curl)
- Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client.

### Request-Response Cycle

![image](https://user-images.githubusercontent.com/2517299/74153642-0c8cc900-4c4c-11ea-888f-0b5f572bf155.png)

- Client requests a url
- Request is sent to the server
- Server receives the request and processes the parameters of the request
- Server returns the page to the client
- Client renders the page

## Internet Connection

- Allows data to be sent and received across the web

## TCP/IP

Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the web.

### Transmission Control Protocol

TCP directs packets to a specific application on a computer using a port number.

### Internet Protocol

IP directs packets to a specific computer using an IP address.

### Protocol Stacks

![image](https://user-images.githubusercontent.com/2517299/74155048-cbe27f00-4c4e-11ea-87dd-7b6a54e02f3c.png)

### Request-Response Cycle

- Client requests a url **via the browser (application layer)**
- **Request is sent to the TCP/IP layer where the request is divided into packets and is given a port and a destination IP**
- Request is sent to the server **with the destination IP**
- Server receives the request and processes the parameters of the request
- **TCP/IP layer combines the packets and passes it on to the backend app (application layer)**
- **Backend app** returns the page to the client **and is passed through the TCP/IP layer**
- Client renders the page

Most of our interactions as web developers live in the application layer.

## DNS

Domain name servers are like address books. Because humans have a hard time remembering IP addresses, we've designated DNS to allow
web servers to be referenced by domain name instead of IP address. The browser needs to find out which server the website lives on, so
it can send HTTP messages to the right place.

### Request-Response Cycle

- Client requests a url via the browser (application layer)
- **Browser checks DNS to get the url's IP address**
- Request is sent to the TCP/IP layer where the request is divided into packets and is given a port and a destination IP**
- Request is sent to the server with the destination IP
- Server receives the request and processes the parameters of the request
- TCP/IP layer combines the packets and passes it on to the backend app (application layer)
- Backend app returns the page to the client and is passed through the TCP/IP layer
- **Server passes the response back to the url's IP address**
- Client renders the page

## HTTP

Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other.
It is a **connectionless** text based protocol. After the request is serviced by a server, the connection between client and server
across the Internet is disconnected. A new connection must be made for each request.

Unlike games where connection needs to be live, HTTP connections are immediately disconnected upon response, which allows more connections
to be served at any given time.

### HTTP Status Codes

| Code | Category | Description |
| --- | --- | --- |
| 1xx | Informational | Communicates transfer protocol-level information. |
| 2xx | Success | Indicates that the client’s request was accepted successfully. |
| 3xx | Redirection | Indicates that the client must take some additional action in order to complete their request. |
| 4xx | Client Error | This category of error status codes points the finger at clients. |
| 5xx | Server Error | The server takes responsibility for these error status codes. |

### Sessions and Cookies

Since HTTP is connectionless, there is a problem of storing data across requests. To allow data to be stored, we use sessions.

**Sessions**

A session is a place to store data during one request that you can read during later requests. Most apps, by default, store session data
inside cookies.

**Cookies**

A cookie is a text file created by a website that is stored in the user's computer either temporarily for that session only or permanently on the hard disk (persistent cookie).
When you request a webpage, the server can set a cookie when it responds back. Your browser will store those cookies. And until the cookie expires,
every time you make a request, your browser will send the cookies back to the server.

## Further reading

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
- https://www.justinweiss.com/articles/how-rails-sessions-work/
- https://restfulapi.net/http-status-codes/
