import {
  UserFlowInteractionsFn,
  UserFlowContext,
  UserFlowProvider
} from '@push-based/user-flow';
import { logVerbose } from '@push-based/user-flow/src/lib/core/utils/loggin';

// Your custom interactions with the page
const interactions: UserFlowInteractionsFn = async (ctx: UserFlowContext): Promise<any> => {
  const { page, flow, browser, collectOptions } = ctx;
  const { url } = collectOptions;

  await flow.navigate(url, {
    stepName: 'Navigate to coffee cart',
  });

  await flow.startTimespan({ stepName: 'Select coffee' });
  const cappuccinoItem = '[data-test=Cappucino]';
  await page.waitForSelector(cappuccinoItem);
  await page.click(cappuccinoItem);
  await flow.endTimespan();
  await flow.snapshot({ stepName: 'Select coffee done' });

  await flow.startTimespan({ stepName: 'Checkout' });
  const checkoutBtn = '[data-test=checkout]';
  await page.waitForSelector(checkoutBtn);
  await page.click(checkoutBtn);

  const nameInputSelector = '#name';
  await page.waitForSelector(nameInputSelector);
  await page.type(nameInputSelector, 'nina');

  const emailInputSelector = '#email';
  await page.waitForSelector(emailInputSelector);
  await page.type(emailInputSelector, 'nina@gmail.com');
  await flow.endTimespan();
  await flow.snapshot({ stepName: 'Checkout done' });

  await flow.startTimespan({ stepName: 'Submit order' });
  const submitBtn = '#submit-payment';
  await page.click(submitBtn);
  await page.waitForSelector(submitBtn);
  const successMsg = '.snackbar.success';
  await page.waitForSelector(successMsg);
  await flow.endTimespan();
  await flow.snapshot({ stepName: 'Submit order done' });

};

const userFlowProvider: UserFlowProvider = {
  flowOptions: {name: 'Order Coffee'},
  interactions
};

module.exports = userFlowProvider;
