# rouvenherzog-demo

This is the demo application for [rouvenherzog](https://github.com/rouvenherzog/rouvenherzog).

rouvenherzog is a simple, pluggable NodeJS blogging and gallery content management system.
It's highly flexible as it plugs in a backend to handle a blog and gallery only.
How you use the created entries is up to you.

[See the demo live](http://demo.rouvenherzog.me)

## Get Started
Make sure you have redis running at `localhost:6379` and mongodb installed at running as well. Okay? Let's go.

Clone this demo onto your machine by running

```
  git clone https://github.com/rouvenherzog/rouvenherzog-demo
````
  
then change into the newly created directory

```
  cd rouvenherzog-demo
```  

and install all dependencies

```
  bower install
  npm install
```

You now have rouvenherzog and all dependencies installed. 
To log in you'll have to create an account and a user:

```
  rouvenherzog createAccount
  rouvenherzog createUser <accountid>
```

In the `config.js` file , change the accountid to the id you just generated, so rouvenherzog knows which objects to query.

If you run the server and head over to `/admin` you will see the backend up and you can log in.

Done.
