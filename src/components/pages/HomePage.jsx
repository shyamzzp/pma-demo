import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link,
    List,
    ListItem} from 'framework7-react';

export default ({ 
  onGoToAbout,
  onOpenLeftPanel,
}) => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" link onClick={onOpenLeftPanel}></Link>
      </NavLeft>
      <NavTitle>People May Ask</NavTitle>
    </Navbar>
    <List>
      <ListItem link onClick={onGoToAbout} title="About"></ListItem>
    </List>
  </Page>
);
