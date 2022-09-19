import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

const baseSideNavigator = {
    template:{
        backgroundColor: color['landind-background'],
        height: '70vh',
    },
    container: {
        borderLeftStyle: 'solid',
        marginTop: '5px',
        height: '65vh',
    },
    title:{
        fontFamily: 'Anton',
        fontSize: '1.2rem',
        letterSpacing: '1px',
        color: 'black',
        textTransform: 'uppercase',
        borderBottomStyle: 'solid',
    },
    list:{
        height: '80%',
        overflow: 'auto',
    },
    sideItemActivated:{
        fontFamily: 'Anton',
        letterSpacing: '0.07rem',
        color: "black",
    },
    sideItemdDetivated:{
        fontFamily: 'Anton',
        letterSpacing: '0.07rem',
        color: "dimgrey",
    }
}

export const activityStyle = makeStyles({
    base:{
        ...baseSideNavigator.template
    },
    sideNavbase:{
        borderColor: color['actions-blue'],
        ...baseSideNavigator.container
    },
    sideNavtext:{
        borderColor: color['actions-blue'],
        ...baseSideNavigator.title
    },
    sideNavList:{
        ...baseSideNavigator.list
    },
    sideNavItemActivated:{
        ...baseSideNavigator.sideItemActivated
    },
    sideNavItemDeactivated:{
        ...baseSideNavigator.sideItemdDetivated
    },
})

export const multimediaStyle = makeStyles({
    base:{
        ...baseSideNavigator.template
    },
    sideNavbase:{
        borderColor: color['multimedia-yellow'],
        ...baseSideNavigator.container
    },
    sideNavtext:{
        borderColor: color['dark-yellow'],
        ...baseSideNavigator.title
    },
    sideNavList:{
        ...baseSideNavigator.list
    },
    sideNavItemActivated:{
        ...baseSideNavigator.sideItemActivated
    },
    sideNavItemDeactivated:{
        ...baseSideNavigator.sideItemdDetivated
    },
})

export const fileStyle = makeStyles({
    base:{
        ...baseSideNavigator.template
    },
    sideNavbase:{
        borderColor: color['contactus-brown'],
        ...baseSideNavigator.container
    },
    sideNavtext:{
        borderColor: color['dark-brown'],
        ...baseSideNavigator.title
    },
    sideNavList:{
        ...baseSideNavigator.list
    },
    sideNavItemActivated:{
        ...baseSideNavigator.sideItemActivated
    },
    sideNavItemDeactivated:{
        ...baseSideNavigator.sideItemdDetivated
    },
})