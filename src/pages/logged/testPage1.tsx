import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { SubscriptionForm } from "@/config/inscricaoGeralConfig/subscriptionForm";

import * as React from "react";

function SubscriptionFormPage() {
  return (
    <Box p="10%">
      <Tabs variant="enclosed">
        <TabList>
          <Tab>General Information</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SubscriptionForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default SubscriptionFormPage;
