# NetworkMap

## Installation

Execute the following steps:
- `git clone https://github.com/schalk/NetworkMap.git`
- `cd NetworkMap`
- `npm install`
- `node index.js`

Connect to port 3000 with your browser to see the network map. Restart `node` if you change the files in `/data`.

## Network Map Files

Network map files are in '[project home]/data/' and should be in the following format:
```
{ "nodes" :
  "description" : "This is network ONE",
  [
    {"label": "Web Server", "host": "172.16.125.104", "notes": "I am a web server", "type": "WWW"},
    {"label": "DB 1", "host": "172.16.42.47", "notes": "The DB runs on me.", "type": "DB"},
    {"label": "Load Balancer", "host": "172.16.42.216", "notes": "I am a load balancer.", "type": "LB"}
  ],
  "connections"  :
  [
    {"from": "172.16.125.104", "to" : "172.16.42.47"},
    {"from": "172.16.42.47", "to" :  "172.16.42.216"}
  ]
}
```
