import s from "./Rating.module.scss"
import { RatingProps } from "./Rating.props"
import { ReactElement, useEffect, useState, KeyboardEvent } from "react"
import StarIcon from "../../../public/star.svg"
import clsx from "clsx"

export const Rating = (props: RatingProps): ReactElement => {
  const { isEditable, rating, setRating, ...rest } = props

  const [ratingArray, setRatingArray] = useState<ReactElement[]>(
    new Array(5).fill(<></>),
  )

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => (
      <span
        key={i}
        className={clsx(
          s.star,
          i < currentRating && s.filled,
          isEditable && s.editable,
        )}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i + 1, e)}
        />
      </span>
    ))
    setRatingArray(updatedArray)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) return

    constructRating(i)
  }

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return

    setRating(i)
  }

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (!isEditable || !setRating) return

    if (e.code === "Space") {
      setRating(i)
    }
  }

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}
