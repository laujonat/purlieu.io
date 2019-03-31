<div align="center">

# purlieu.io

> NOTE: Lyft has announced updates to their API resulting in authorized accesss to the endpooints needed for this application.  Screenshots below were the results of the original application, but we will now have to update our API requests to be in compliance with Lyft' `ride estimates` API. 

## How to use
Click on the map to auto-fill the address input or with permission, Purlieu will fetch your current location for you.  Use the range slider to select an input of $10-$400. We'll use your inputs and generate a set of boundaries and output
your selection details onto a card and project a polygon onto the map. 



### Desktop
![Desktop](https://i.imgur.com/qBRKmHe.jpg)


### Tablet

![Tablet](https://i.imgur.com/vMoQwB8.png)

</div>

## Purpose
To incorporate various ride sharing API's and create an orthogonal projection onto a google maps with the intent of visualizing distance based on a dollar input.

```
* Lyft 
* Person vehicles (tbd)
* Scooter commute services (tbd)
* Bike sharing services (tbd)
* Bus/Bart transit (tbd)
```

# Developers
```
yarn
yarn dev
```
## Setup

1. Install yarn dependencies as needed on your local machine.


## API Tokens
Create a .env file and replace variables with your own. 

### Lyft 
Register for a developer account for ClientID and Secret Key


## Testing 
If you are snapshot testing, make sure you commit: `yarn update:snapshot`
```
yarn test 
yarn test:watch
```

## Deployment 
```
* Standard git flow 
* Heroku deployment pipeline 
```
