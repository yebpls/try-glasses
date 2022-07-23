import React, { Component } from "react"
import Images from "../assets/images"
import styles from "./styles.module.css"
import clsx from "clsx"
import products from "../assets/dataGlasses.json"

export class Section extends Component {
  state = {
    glassImg: Images.v1,
  }

  changeGlasses = (img) => {
    this.setState({
      glassImg: img,
    })
  }

  renderProduct = () => {
    const api = products.map((items) => {
      return (
        <a
          key={items.id}
          className={clsx(styles.item)}
          onClick={() => this.changeGlasses(items.url)}
        >
          <img src={items.url} />
        </a>
      )
    })
    return api
  }

  render() {
    return (
      <div className={clsx(styles.body)}>
        <div className={clsx(styles.container)}>
          <h1 className={clsx(styles.title)}>Try glasses app online</h1>
          <div className={clsx(styles.model)}>
            <div className={clsx(styles.model_image, styles.model1)}>
              <img src={Images.model} className={clsx(styles.mod)} />
              <div className={clsx(styles.glas)}>
                <img src={this.state.glassImg} className={clsx(styles.gla)} />
              </div>
            </div>
            <div className={clsx(styles.model_image, styles.model2)}>
              <img src={Images.model} className={clsx(styles.mod)} />
            </div>
          </div>
          <div className={clsx(styles.glasses)}>
            {this.renderProduct()}

            {/* <a className={clsx(styles.item)}>
              <img src={Images.v1} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v2} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v3} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v4} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v5} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v6} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v7} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v8} />
            </a>
            <a className={clsx(styles.item)}>
              <img src={Images.v9} />
            </a> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Section
