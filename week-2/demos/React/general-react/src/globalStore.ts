/*
Question was can we use some sort of global store for our information
The answer is yes (kinda) so we've made this object called globalState who we we will update and access as needed
*/

export const globalState = {
    globalNameValue: "Bryan"
}

/*
So here we've created a global store that can be accessed anywhere and this is one of the solutions to this prop drilling problem, other 
solutions include useContext, as well as different state stores like Redux (which you can look into but it get complicated quickly so be warned)
*/