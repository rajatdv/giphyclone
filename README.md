# GIFFY

## Usage

1. Clone repo `git clone https://github.com/rajatdv/giphyclone.git`.
2. Go inside the repo `cd giphyclone`.
3. Install dependencies `yarn install`.
4. Run `yarn ios` or `yarn android` to start your application!

**NOTE** : Make an account at giphy to get API_KEY and paste that key in `/src/services/config.js` file

## Folder Structure

```
./src/                          //Contains all the code of the project
├── components                  //All components go in here
│ ├── Buttons                   //Component name as folder
│ │ ├── index.js                //export the component(s).
├── navigation                  //Navigation related code goes in here
│ ├── stack.js
│ └── tabs.js
├── screens                     //Code for the the screens
│ ├── Home                      //Screen name
│ │ ├── index.js                //screen code
| |──index.js                   //export all the screens
├── services                    //all the network and local storage related code
│ ├── api.js
│ └── config.js
└── theme                       //Theme related code goes in here
  └── index.js
```
