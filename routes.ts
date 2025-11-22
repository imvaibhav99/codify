/** 
*
*@type {string[]}
*/

//routes for publicaly available pages
export const publicRoutes: string[]= [

]

/**
 * @type {string[]}
 */

//routes for not publicaly available pages
export const protectedRoutes: string[]= [
    "/"
]

/**
 * @type {string[]}
 */

export const authRoutes: string[]= [
   "/auth/sign-in",
]

/**
 * @type {string}
 */

export const apiAuthPrefix: string="/api/auth"
export const DEFAULT_LOGIN_REDIRECT= "/";