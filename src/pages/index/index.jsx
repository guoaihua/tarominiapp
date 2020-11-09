import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

export default class Index extends Component {
  constructor() {
    super();
  }

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  handleOnReady =()=>{
    console.log('onReady');
  }

  handleReady =()=>{
    console.log('ready');
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <test  onOnReady={this.handleOnReady} onReady={this.handleReady}></test>
      </View>
    )
  }
}
