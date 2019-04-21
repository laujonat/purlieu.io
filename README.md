<div align="center">

# purlieu.io

> Please note, Lyft API for developers has a strict a request limit. If hexagonal projection is faulty, please try again later. 


The real maximum price for a Lyft is $400.   

## How to use
Allow location to Purlieu.io to autopopulate the address form. Alternatively, you can also type in an address or click a location on the map to populate the field. Use the range slider to select an input of $10-$30. (Yes, I'm working on it, there is a bug for values higher than $30).  Purlieu will then calculate and project a hexagonal matrice onto the map, giving a distance visualization on how you can travel from the current location.  



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
