'use es6';

import React from 'react';
import {renderIntoDocument} from 'react.addons.TestUtils';
import {findDOMNode} from 'react-dom';
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
  });

  it('renders favorites', () => {
    const picker = renderIntoDocument(<ColorPicker favorites={['#333333', '#1F9900', '#71C9AD']} />);
    const pickerEl = findDOMNode(picker);
    const favoritesEl = pickerEl.querySelector('.favorites');
    expect(favoritesEl).toBeDefined();
    expect(favoritesEl.querySelectorAll('.react-colorpicker-panel-preview').length).toBe(3);
  });
});
