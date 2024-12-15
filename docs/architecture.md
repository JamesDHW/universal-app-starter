# Universal Architecture

## Architecture Diagram

![Architecture Diagram](./architecture/universal-architecture-light.svg#light-mode-only)
![Architecture Diagram](./architecture/universal-architecture-dark.svg#dark-mode-only)

## Project Structure

```
|__apps            <- Native apps go here
    |__expo
    |__next
    |__<other>
|__packages
    |__client
        |__<other>
        |__core    <- Core React code goes here
        |__ui      <- UI atomic components go here
    |__<other>
```
