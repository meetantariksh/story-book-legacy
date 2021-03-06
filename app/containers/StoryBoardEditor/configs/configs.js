import AcceptanceIcon from './icons/acceptanceCri';
import ActionPointIcon from './icons/actionPoint';
import CommentsIcon from './icons/comments';
import NavigationIcon from './icons/navigation';
import StartPointIcon from './icons/startPoint';
import AgemtIcon from './icons/Agent';
import PolicyOwnerIcon from './icons/PolicyOwner';
import BrokerDealerIcon from './icons/BrokerDealer';

import AcceptanceComponent from './components/acceptanceCri';
import ActionPointComponent from './components/actionPoint';
import CommentsComponent from './components/comments';
import NavigationComponent from './components/navigation';
import StartPointComponent from './components/startPoint';
import AgentLoginComponent from './components/Agent/AgentComponents';
import PolicyOwnerLoginComponent from './components/PolicyOwner/PolicyOwnerLogin';
import BrokerDealerLoginComponent from './components/BrokerDealer/BrokerDealerLogin';

const config = {
  entityTypes: {
    Start: {
      width: 125,
      height: 75,
    },
    Navigate: {
        width: 125,
        height: 75,
    },
    Comments: {
        width: 125,
        height: 75,
    },
    ActionPoint: {
        width: 125,
        height: 75,
    },
    Acceptance: {
        width: 125,
        height: 75,
    },
    Agent: {
      width: 125,
      height: 75,
    },
    PolicyOwner: {
        width: 125,
        height: 75,
    },
    BrokerDealer: {
        width: 125,
        height: 75,
    },
  },
  gridSize: 50,
};

const customEntities = {
  Start: {
    component: StartPointComponent,
    icon: StartPointIcon,
  },
  Navigate: {
      component: NavigationComponent,
      icon: NavigationIcon,
  },
  Comments: {
      component: CommentsComponent,
      icon: CommentsIcon,
  },
  ActionPoint: {
      component: ActionPointComponent,
      icon: ActionPointIcon,
  },
  Acceptance: {
      component: AcceptanceComponent,
      icon: AcceptanceIcon,
  },
  Headings: {
    component: StartPointComponent,
    icon: StartPointIcon,
  },
  Agent: {
    component: AgentLoginComponent,
    icon: AgemtIcon,
  },
  PolicyOwner: {
      component: PolicyOwnerLoginComponent,
      icon: PolicyOwnerIcon,
  },
  BrokerDealer: {
    component: BrokerDealerLoginComponent,
    icon: BrokerDealerIcon,
  },
};

export { config, customEntities };