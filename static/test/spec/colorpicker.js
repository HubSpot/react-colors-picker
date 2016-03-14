'use es6';

import ColorPicker from 'react-colors-picker/ColorPicker';
import {getRenderOutput} from 'react-utils/testing/ShallowRenderUtils';

describe('Colorpicker', () => {
  it('renders', () => {
    const picker = getRenderOutput(<ColorPicker />);
    expect(picker.props.className).toContain('react-colorpicker hex-only');
  });

  it('full featured', () => {
    const picker = getRenderOutput(<ColorPicker hexOnly={false} includeAlpha={true} />);
    expect(picker.props.className).toContain('with-alpha');
  })
});
