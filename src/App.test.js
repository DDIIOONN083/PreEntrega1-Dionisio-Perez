/**
 * @Author: Your name
 * @Date:   2023-09-12 22:16:05
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-09-13 12:11:20
 */


  
    
  


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>

import { render, screen } from '@testing-library/react';

import App from './App';
import { BodyText } from 'react-bootstrap-icons'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();

});


