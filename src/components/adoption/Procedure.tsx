import { ProcedureContainer } from "./components"
function Procedure() {
  return (
    <ProcedureContainer>
      <h3>Do you have room in your heart for one of our adorable, rescued pets?</h3>

      <img src="/images/content/procedure.jpg" />

      <p>Please read our adoption policies carefully. We want to ensure our rescued animals go to a loving and safe environment.</p>
      <p>if you are 100% sure you are ready to be a pet owner and can meet our adoption requirements, please read on.</p>

      <div className="adoption__process">
        <h3>The Adoption Process</h3>
        <ol>
          <li>Select an animal/s from Noah's Ark Dog & Cat Shelter "Adoption" tab or visit our <a href=" https://www.facebook.com/Noahsarkdogandcatshelter">Facebook page</a></li>
          <li>Visit the Noah's Ark Dog & Cat Shelter in Pampanga to meet our pets for adoption. We require at least 1 visit for cats and 2 visits for dogs </li>
          <li>Fill out the Noah's Ark Dog & Cat Shelter Adoption Form</li>
          <li>After we have gone over your application, we will schedule a home visit for you with one of our volunteers to ensure that your home environment is safe for our rescue/s and to make necessary recommendations</li>
          <li>Once approved, you may come and pick up the animal/s</li>
        </ol>
      </div>
    </ProcedureContainer>
  )
}

export default Procedure