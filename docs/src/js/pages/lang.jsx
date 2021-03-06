"use strict"

import React from 'react'
import prettify from '../prettify'
const {Lang: {getLang}} = global.uiRequire()

@prettify
export default class Page extends React.Component {
  static displayName = 'Pages/Lang'

  state = {
    path: 'request.status.405',
    text: getLang('request.status.405')
  }

  handleChange (event) {
    let path = event.target.value
    let text = JSON.stringify(getLang(path), null, 4) || 'undefined'
    this.setState({ path, text })
  }

  render () {
    return (
      <div>
        <div className="header">
          <h1>Language</h1>
          <h2>语言包</h2>
        </div>

        <div className="content">
          <p>所有提示文字信息都放在 <em>lang</em> 下。</p>
          <h2 className="subhead">setLang(map[,map2...])</h2>
          <p>更新或者增加信息。</p>

          <h2 className="subhead">getLang(path)</h2>
          <p>获取信息，<em>path</em> 为 <em>.</em> 分隔字符串。</p>
          <p>
            <input onChange={this.handleChange.bind(this)} value={this.state.path} type="text" />
            <p>{this.state.text}</p>
          </p>

          <h2 className="subhead">当前信息</h2>
          <pre className="prettyprint">{JSON.stringify(getLang(), null, 4)}</pre>
        </div>
      </div>
    )
  }
}
