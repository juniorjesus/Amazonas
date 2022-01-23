import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Drawer, List  } from '@mui/material'
import { Menu } from '@material-ui/icons'  

const Navbar2 = ({ setCtg }) => {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className="drawel-navbar2">
                    <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632525119/Amazonas/image_1_pmddhc.png" alt="" />
                </div>
                    <h3 className="title-navbar2-categorie" onClick={()=> setCtg('all')}>Todo</h3>
                    <h3 className="title-navbar2-categorie" onClick={()=> setCtg('comp')}>Computo</h3>
                    <h3 className="title-navbar2-categorie" onClick={()=> setCtg('acc')}>Accesorios</h3>
                    <h3 className="title-navbar2-categorie" onClick={()=> setCtg('lap')}>Laptops</h3>
            </List>
        </Box>
    );
    return (
        <nav className="container-navbar2">
            <React.Fragment>
                <div className="container-navbar2-icon" onClick={toggleDrawer('left', true)}>
                    <Menu className="icon-navbar2-menu" />
                    <span className="text-navbar2-menu">Todo</span>
                </div>
            <Drawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            </React.Fragment>
            <p className="text-navbar2 cards">Targetas de regalo</p>
            <p className="text-navbar2 prime">Prime</p>
            <p className="text-navbar2 top">Los Más vendidos</p>
            <p className="text-navbar2 amB">AmazonBasics</p>
            <p className="text-navbar2 comp-tablet">Computo y Tabletas</p>
            <Link to="/vender"><p className="text-navbar2 sell">Vender</p></Link>
        </nav>
    )
}

export default Navbar2
