# Purlieu.io
## Don't look at me! 

## Purpose
Real time collaboration room incorporating various ride sharing API's and generate an orthogonal projection onto a google maps with the intent of visualizing distance based on a dollar amount collaborators have agreed upon entered into a range input. Within polygon bounds, collaborating users can view a list of restaurants, news, events, etc. 

## Proof of concept 
![alt text](https://i.imgur.com/6xbpZB6.png)

```
* Uber 
* Person vehicles
* Scooter commute services
* Bike sharing services
* Bus/Bart transit
```

## Deployment 
```
* Standard git flow 
* Heroku deployment pipeline 
```

## How to use
```
yarn 
yarn dev
```

## Testing 
If you are snapshot testing, make sure you commit: `yarn update:snapshot`
```
yarn test 
yarn test:watch
```

### Setup

1. Install yarn dependencies as needed on your local machine.
1. Requires Google Api Auth token and Ride Service Token for registed user in local `.env`
