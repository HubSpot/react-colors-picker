'use es6';

import ColorPicker from 'react-colors-picker/ColorPicker';
import {getRenderOutput} from 'react-utils/testing/ShallowRenderUtils';

describe('Colorpicker', () => {
  it('renders', () => {
    getRenderOutput(<ColorPicker />);
  })
})
