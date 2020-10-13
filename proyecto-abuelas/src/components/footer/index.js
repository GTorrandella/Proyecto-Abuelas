import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';


class Footer extends React.Component {

    useStyles =  makeStyles((theme) => ({
        footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
        },
    }));

    Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {''}
        <Link color="inherit" href="https://undav.edu.ar/">
            UNDAV
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
    }


    render() {
        const classes = this.useStyles;
        return (
            <React.Fragment>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Proyecto Abuelas
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Secretaría de Extensión
                    </Typography>
                    {this.Copyright()}
                </footer>
                {/* End footer */}
            </React.Fragment>
        )
    }
}

export default Footer;