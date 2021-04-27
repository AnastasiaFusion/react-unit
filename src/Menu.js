import React, { createRef } from 'react';
import styled from 'styled-components';
import { items, padding, fullMenuSize } from './constants';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.menuBlock = createRef();
    this.state = {
      dropMenuOptions: [],
      menuOptions: [],
      width: 0,
    }
  }


  calculateOptions = () => {
    const width = window.innerWidth / 2;;
    const buttonSizes = items.map(item => item.minWidth + 30);
    const isMenuFull = width >= fullMenuSize;
    let counter = isMenuFull ? 0 : 110 + padding * 2;
    let menuOptions = [];
    let dropMenuOptions = [];
  
    buttonSizes.forEach((val, ind) => {
      counter += val;
      if (counter < width) {
        menuOptions.push(items[ind])
      }

      if (counter > width) {
        dropMenuOptions.push(items[ind])
      }
    })
    this.setState({
      dropMenuOptions,
      menuOptions,
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.calculateOptions);
    this.setState({
      width: window.innerWidth / 2,
    }, this.calculateOptions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateOptions);
  }


  render() {
    const {menuOptions, dropMenuOptions } = this.state;

    return (
      <Container>
      <MenuWrapper ref={this.menuBlock}>
        {menuOptions.map((item) => (
          <MenuItem
            minWidth={item.minWidth}
            key={item.title}
        >{item.title}</MenuItem>
        ))}
        {
          dropMenuOptions.length ? (
            <DropDownMenu>
              <ShowMoreButton>
                <MenuItem minWidth={110}>
                Show More
                <Tick>^</Tick>
                </MenuItem>
              </ShowMoreButton>
              <MenuContent>
                {
                  dropMenuOptions.map(item => <MenuItem key={item.title} minWidth={item.minWidth}>{item.title}</MenuItem>)
                }
              </MenuContent>
            </DropDownMenu>
          ) : null
        }
      </MenuWrapper>
    </Container>
    )
  }
}

const MenuWrapper = styled.div`
  background-color: #e5eef9;
  max-width: 50%;
  display: flex;
  justify-content: space-between;
`;

const ShowMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    background-color: #D1E6FA;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f6f8;
`;

const MenuContent = styled.div`
  position: absolute;
  z-index: 5;
  width: 120px;
  border-radius: 4px;
  display: none;
`;

const Tick = styled.div`
  color: #2C86EB;
  font-weight: bold;
  margin-left: 10px;
`;

const DropDownMenu = styled.div`

&:hover ${MenuContent} {
    display: block
  }

&:hover ${Tick} {
  transform: rotateZ(180deg);
  transition: transform .5s;
}
`;

export default Menu;
