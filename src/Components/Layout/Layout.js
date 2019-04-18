import React from 'react';
import Aux from '../../Hoc/Aux';
import classes from './Layout.css';

const Layout = (props) =>(
<Aux>
    <div> Toolbar,SideDrawer,BackDrop</div>
    <main className={classes.Content}>
      {props.Children}  
    </main>
</Aux>

);

export default Layout;


