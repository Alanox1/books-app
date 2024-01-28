import { Text } from "@chakra-ui/react";

const BookDescription = ({ description }) => {
    const parseHTML = (htmlString) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      return doc.body.textContent || "";
    };
  
    const processedDescription = parseHTML(description);
  
    return (
        <Text textAlign="start" width={{base : "100%", sm : "80%"}} fontSize="18px">{processedDescription}</Text>
    
    );
  };
  
  export default BookDescription;
