import { h } from 'preact';

import { BaseComponent } from './base';
import { classJoin, className } from '../util/className';
import { Search } from './plugin/search/search';
import { useRef } from 'preact/hooks';
import getConfig from '../util/getConfig';

interface HeaderContainerState {
  isActive: boolean;
}

export class HeaderContainer extends BaseComponent<{}, HeaderContainerState> {
  private headerRef = useRef(null);

  constructor(props, context) {
    super(props, context);

    this.state = {
      isActive: true,
    };
  }

  componentDidMount() {
    if (this.headerRef.current.children.length === 0) {
      this.setState({
        isActive: false,
      });
    }
  }

  render() {
    const config = getConfig(this.context);

    if (this.state.isActive) {
      return (
        <div
          ref={this.headerRef}
          className={classJoin(className('head'), this.config.className.header)}
          style={{ ...this.config.style.header }}
        >
          <Search {...config.search} />
        </div>
      );
    }

    return null;
  }
}
