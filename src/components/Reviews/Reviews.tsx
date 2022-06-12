import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Grid } from '@nextui-org/react'
import ReviewsContainer from 'components/Reviews/ReviewsContainer'
import ReviewsTitle from 'components/Reviews/ReviewsTitle'
import ReviewsCard, { ReviewsCardProps } from 'components/Reviews/ReviewsCard'
import ReviewsButtons from 'components/Reviews/ReviewsButtons'
import ModalFeedback from 'components/ModalFeedback/ModalFeedback'
import data from 'data/data'

export default function Reviews() {
  const [reviewsCount, setReviewsCount] = useState(data.reviews.defaultCount)
  const [modalVisible, setModalVisible] = React.useState(false)

  const openModalHandler = () => setModalVisible(true)
  const closeModalHandler = () => setModalVisible(false)

  const showMoreHandler = () => {
    setReviewsCount(reviewsCount + data.reviews.defaultCount)
  }

  return (
    <ReviewsContainer>
      <ReviewsTitle text={data.reviews.title} />
      <Grid.Container gap={3}>
        {renderReviews(data.reviews.items, reviewsCount)}
      </Grid.Container>
      <ReviewsButtons
        handleFeedback={openModalHandler}
        handleMore={showMoreHandler}
      />
      <ModalFeedback visible={modalVisible} closeHandler={closeModalHandler} />
    </ReviewsContainer>
  )
}

const renderReviews = (reviews: ReviewsCardProps[], count: number) => {
  return reviews.slice(0, count).map((item) => {
    return (
      <Grid key={v4()}>
        <ReviewsCard
          name={item.name}
          desc={item.desc}
          avatarSrc={item.avatarSrc}
          text={item.text}
        />
      </Grid>
    )
  })
}
