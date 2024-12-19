import { SfSelect, SfInput, SfCheckbox, SfButton } from '@storefront-ui/react';
import { useState } from 'react';

// Sample countries and states
const countries = ['Germany', 'Great Britain', 'Poland', 'United States of America'];
const states = ['California', 'Florida', 'New York', 'Texas'];

export default function CheckoutAddress() {
  const [streetIsValid, setStreetIsValid] = useState(true);

  // Validation function for the street field
  const validateStreet = (e) => {
    setStreetIsValid(!!e.target.value);
  };

  // Form submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Collect form data
    const formData = new FormData(form);
    // Optionally, convert the form data to a JSON object
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON); // Log the form data for debugging
  };

  return (
    <form className="p-4 flex gap-4 flex-wrap text-neutral-900" onSubmit={onSubmit}>
      <h2 className="w-full typography-headline-4 md:typography-headline-3 font-bold">Billing address</h2>
      
      {/* First Name */}
      <label className="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
        <span className="typography-text-sm font-medium">First Name</span>
        <SfInput name="firstName" autoComplete="given-name" required />
      </label>

      {/* Last Name */}
      <label className="w-full md:w-auto flex-grow flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Last Name</span>
        <SfInput name="lastName" autoComplete="family-name" required />
      </label>

      {/* Phone */}
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Phone</span>
        <SfInput name="phone" type="tel" autoComplete="tel" required />
      </label>

      {/* Country Select */}
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Country</span>
        <SfSelect name="country" placeholder="-- Select --" autoComplete="country-name" required>
          {countries.map((countryName) => (
            <option key={countryName}>{countryName}</option>
          ))}
        </SfSelect>
      </label>

      {/* Street Input */}
      <div className="w-full md:w-auto flex-grow flex flex-col gap-0.5">
        <label>
          <span className="typography-text-sm font-medium">Street</span>
          <SfInput
            name="street"
            autoComplete="address-line1"
            className="mt-0.5"
            onBlur={validateStreet}
            onChange={validateStreet}
            required
            invalid={!streetIsValid}
          />
        </label>
        <div className="flex flex-col mt-0.5">
          {!streetIsValid && (
            <strong className="typography-error-sm text-negative-700 font-medium">Please provide a street name</strong>
          )}
          <small className="typography-hint-xs text-neutral-500 mt-0.5">Street address or P.O. Box</small>
        </div>
      </div>

      {/* Apt#, Suite, etc */}
      <div className="w-full md:w-[120px] flex flex-col gap-0.5">
        <label>
          <span className="typography-text-sm font-medium">Apt#, Suite, etc</span>
          <SfInput name="aptNo" className="mt-0.5" />
        </label>
        <small className="typography-hint-xs text-neutral-500 mt-0.5">Optional</small>
      </div>

      {/* City */}
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">City</span>
        <SfInput name="city" autoComplete="address-level2" required />
      </label>

      {/* State Select */}
      <label className="w-full md:w-auto flex flex-col gap-0.5 flex-grow">
        <span className="typography-text-sm font-medium">State</span>
        <SfSelect name="state" placeholder="-- Select --" autoComplete="address-level1" required>
          {states.map((stateName) => (
            <option key={stateName}>{stateName}</option>
          ))}
        </SfSelect>
      </label>

      {/* ZIP Code */}
      <label className="w-full flex flex-col gap-0.5 md:w-[120px]">
        <span className="typography-text-sm font-medium">ZIP Code</span>
        <SfInput name="zipCode" placeholder="eg. 12345" autoComplete="postal-code" required />
      </label>

      {/* Checkbox for shipping address */}
      <label className="w-full flex items-center gap-2">
        <SfCheckbox name="useAsShippingAddress" />
        Use as shipping address
      </label>

      {/* Submit and Reset Buttons */}
      <div className="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
        <SfButton type="reset" variant="secondary" className="w-full md:w-auto">
          Clear all
        </SfButton>
        <SfButton type="submit" className="w-full md:w-auto">
          Save
        </SfButton>
      </div>
    </form>
  );
}
