import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
      <h1>Heroes Marvel</h1>
      <br />
      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}
