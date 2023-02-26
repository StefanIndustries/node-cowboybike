# node-cowboybike
API wrapper for cowboy bikes

Makes it super easy to get details of your account and bike.
All results are typescript models and are promise based. Async/await is supported.

# Construct the wrapper
```typescript
import { Cowboy } from "node-cowboybike";

const cowboy = new Cowboy('username', 'password');
```

The wrapper takes care of refreshing and retrieving access tokens for you when required.

# Retrieve account details
```typescript
client.getMe().then(result => {
    console.log(result);
});
```

# Retrieve details of your bike
```typescript
client.getBike(bikeId).then(result2 => {
    console.log(result2);
});

// bikeId is of type int, can be found from the getMe() result
```
