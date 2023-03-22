// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  rightClick = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  leftClick = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderActiveReview = currentreviewDetails => {
    const {imgUrl, username, companyName, description} = currentreviewDetails
    return (
      <div className="reviewBlock">
        <img alt={username} src={imgUrl} />
        <p className="userName">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentreviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="reviews-bg">
        <h1 className="heading">Reviews</h1>

        <div className="users-review-container">
          <button
            onClick={this.leftClick}
            data-testid="leftArrow"
            className="button"
            type="button"
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.renderActiveReview(currentreviewDetails)}
          <button
            data-testid="rightArrow"
            onClick={this.rightClick}
            className="button"
            type="button"
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
