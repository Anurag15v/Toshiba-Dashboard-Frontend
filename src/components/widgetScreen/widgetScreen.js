import React from 'react';
import './widgetScreen.css'
import RevenueWidget from '../revenueWidget/revenueWidget';
import DealWidget from '../dealWidget/dealWidget';
import GoalWidget from '../goalWidget/goalWidget';
import CustomersWidget from '../customerWidget/customerWidget';
import SmallWidgets from '../smallWidgets/smallWidgets';
import ChatWidget from '../chatWidget/chatWidget';
import StateWidget from '../stateWidget/stateWidget';
import NewDealsWidget from '../newDealsWidget/newDealsWidget';
import GraphWidget from '../graphWidget/graphWidget';

const  WidgetScreen=()=>
{
    return (<div className='widget-container'>
            <div className='widget-row'>
                <RevenueWidget increasePercentage={15}/>
                <DealWidget lossPercentage={4}/>
                <GoalWidget progress={84}/>
            </div>
            <div className='widget-row'>
                <CustomersWidget/>
                <GraphWidget/>
            </div>
            <div className='widget-row'>
                <ChatWidget/>
                <StateWidget/>
                <NewDealsWidget/>
            </div>
        </div>);
}
export default WidgetScreen;