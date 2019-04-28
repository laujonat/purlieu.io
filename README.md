<div align="center">

# purlieu.io

> Oops, something is broken with my Heroku deploy. Only a development version is available at this time. Please note, Lyft developer API maintains a strict request limit. If hexagonal projection is faulty, try refreshing the page or try again later. 


The real maximum price for a Lyft is $400.   

## How to use
Allow location to Purlieu.io to autopopulate the address form. Alternatively, you can also type in an address or click a location on the map to populate the field. Use the range slider to select an input of $10-$30. (Yes, I'm working on it, there is a bug for values higher than $30).  Purlieu will then calculate and project a hexagonal matrice onto the map, giving a distance visualization on how you can travel from the current location.  

#### Purpose
To learn React Saga patterns and various testing practices. Webpack was made from scratch to better understand how all pieces fit together.  Purlieu is the personal continuation of group capstone project in 2018.  

### Technologies 

```
React
Redux 
React Saga Patterns 
Saga Test Plan library 
Jest/Enzyme
Google Maps API 
Styled Components 
```


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
npm run dev # development 
npm run start # production 
```

## Configuration
1. Create an .env.local file.
2. Sign up for an account on Google Maps API to retrieve your API key.
3. Sign up for a Lyft Developer account for the CLIENT_ID and CLIENT_SECRET keys.
4. Replace .env values with your newly obtained keys.

## Testing 
```
# If you are snapshot testing, make sure you commit: `npm run update:snapshot`
npm run test 
```

## Deployment 
```
* Standard git flow 
* Heroku deployment pipeline 

# Run heroku environemt locally 
$ heroku local npm run start
$ heroku logs # To view local version of pre-deployed application 
```
