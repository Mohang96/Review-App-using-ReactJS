import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewNo: 0}

  showPreviousReview = () => {
    const {reviewNo} = this.state
    if (reviewNo !== 0) {
      const updatedReviewNo = reviewNo - 1
      this.setState({reviewNo: updatedReviewNo})
    }
  }

  showNextReview = () => {
    const {reviewNo} = this.state
    if (reviewNo >= 0 && reviewNo < 3) {
      const updatedReviewNo = reviewNo + 1
      this.setState({reviewNo: updatedReviewNo})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewNo} = this.state

    return (
      <div className="background">
        <h1 className="heading">Reviews</h1>
        {[reviewsList[reviewNo]].map(review => {
          const {imgUrl, username, companyName, description} = review
          return (
            <div>
              <img src={imgUrl} alt={username} />
              <div className="user-indicators-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.showPreviousReview}
                  data-testid="leftArrow"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                    alt="left arrow"
                  />
                </button>
                <p>{username}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.showNextReview}
                  data-testid="rightArrow"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    alt="right arrow"
                  />
                </button>
              </div>
              <p className="text">{companyName}</p>
              <p className="text">{description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ReviewsCarousel
