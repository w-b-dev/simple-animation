# Simple Animation
## Github pages
To deploy the files statically with GH, the **dist** folder was already replaced with **docs** folder. One custom step is needed:
- Replace ```"baseHref": "/",``` with ```"baseHref": "/simple-animation/",```

Having it configured on **angular.json**, and deployed to GH/master, the site is automatically synced/deployed.
