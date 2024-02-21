import { TextLabel, TextValue } from "../../../Components/Typography";
import { TicketDetailsWrapper } from "./style";

const TicketDescription = ({ data }) => {
  return (
    <TicketDetailsWrapper p={2}>
      <TextValue className='TicketDescription' mb={1}>Ticket Details</TextValue>
      <TextValue className='TicketDescriptionInfo'>
      Hi, we’re having an issue with engine overspeed. We’ve gone through all the usual checks and think we have a faulty component but cannot confirm. We need external support from a manufacturers engineer if we cannot find the issue with our next checks. Either that or if someone has had the same issue before and resolved it. I’ve marked the component within the details. Please let
      </TextValue>
    </TicketDetailsWrapper>
  );
};

export default TicketDescription;
