import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Logo from '~/assets/Mercado-Livre-logo.png';

import { List, Item, Intro } from './styles';

export default function MainList({ items = [] }) {
   function renderItems(f) {
      return (
         <>
            <div>
               <img src={f.picture} alt={f.id} />
            </div>
            <section>
               <Link to={`/items/${f.id}`}>
                  <p>{f.title}</p>
               </Link>
            </section>
         </>
      );
   }

   return (
      <List
         autoplay
         dots
         infinite
         speed={700}
         slidesToShow={1}
         slidesToScroll={1}
      >
         <Intro>
            <img src={Logo} alt="Logo" />
            <span>Sempre Levando o melhor para o Brasil !!</span>
         </Intro>
         {items.length >= 1
            ? items.map(item => <Item key={item.id}>{renderItems(item)}</Item>)
            : ''}
         <Intro>
            <p>Agradeçemos sua visita</p>
         </Intro>
      </List>
   );
}

MainList.propTypes = {
   items: PropTypes.instanceOf(Array),
};
