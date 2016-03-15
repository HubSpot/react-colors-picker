'use es6';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactColorPicker from 'react-colors-picker/ColorPicker';

class Example extends React.Component {

  renderSimple() {
    return (
      <ReactColorPicker color="#006699" />
    );
  }

  renderFullFeatured() {
    return (
      <ReactColorPicker color="#006699" hexOnly={false} includeAlpha={true} />
    );
  }

  renderWithFavorites() {
    return (
      <ReactColorPicker
        color="#006699"
        favorites={['#333333', '#1F9900', '#71C9AD', '#333333', '#1F9900', '#71C9AD', '#333333', '#1F9900', '#71C9AD']}
        onChange={v => console.log(v)}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>React Color Picker</h1>
        <div className="example">
        <h3>Simple</h3>
          {this.renderSimple()}
        </div>

        <div className="example">
        <h3>Full Featured</h3>
          {this.renderFullFeatured()}
        </div>

        <div className="example">
          <h3>With Favorites</h3>
          {this.renderWithFavorites()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('example'));
