# NetworkMap

## Network Map Files

Network map files are in '[project home]/data/' and should be in the follwong format:
```
{ "nodes" :
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
