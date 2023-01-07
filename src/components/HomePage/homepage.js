import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import DefinitionCardGroup from './definitioncardgroup';
import FloatingAction from './floatingaction';

const definitions = [{
  foreign: 'Mon',
  english: 'My/Mine',
  usage: 'Mon vangri tè te mui mui'
},
{
  foreign: 'Vangri',
  english: 'To think or believe',
  usage: 'Mon vangri tè tr mui mui'
},
{
  foreign: 'te',
  english: 'To speak',
  usage: 'Mon Vangri tè te mui mui'
},
{
  foreign: 'tè',
  english: 'You',
  usage: 'Mon Vangri tè te mui mui'
},
{
  foreign: 'mui mui',
  english: 'Too much',
  usage: 'Mon Vangri tè te mui mui'
}];
// The main page of the app
export default function HomePage() {
  // Animation so that it fades in
  return (
    <motion.div
      key={"home"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Box pl={5} pr={5}>
        <Box h='50px'></Box>
        <DefinitionCardGroup definitions={definitions} />
        <FloatingAction />
      </Box>
    </motion.div>
  );
}