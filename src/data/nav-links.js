// show prop is required to determine whether we want to display the link or not. We have conditions in palce inside Navigation route component
export const links = [
    {
        text: 'Sign In',
        route: '/auth',
        show: true
    },
    {
        text: 'Shop',
        route: '/shop',
        show: true
    },
    {
        text: 'Sign Out',
        route: '/signout',
        show: true
    }
]