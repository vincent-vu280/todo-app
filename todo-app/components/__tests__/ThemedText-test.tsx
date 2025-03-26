import * as React from 'react';
import renderer from 'react-test-renderer';
import { TodoCard } from '../ui/TodoCard';


it(`renders correctly`, () => {
  const tree = renderer.create(<TodoCard 
    name='test' 
    id='0'
    category='Personal'
    complete={true} 
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
