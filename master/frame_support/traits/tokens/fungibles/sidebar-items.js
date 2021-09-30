initSidebarItems({"struct":[["Imbalance","An imbalance in the system, representing a divergence of recorded token supply from the sum of the balances of all accounts. This is `must_use` in order to ensure it gets handled (placing into an account, settling from an account or altering the supply)."]],"trait":[["Balanced","A fungible token class where any creation and deletion of tokens is semi-explicit and where the total supply is maintained automatically."],["BalancedHold","Trait for mutating one of several types of fungible assets which can be held."],["Create","Trait for providing the ability to create new fungible assets."],["Destroy","Trait for providing the ability to destroy existing fungible assets."],["HandleImbalanceDrop","Handler for when an imbalance gets dropped. This could handle either a credit (negative) or debt (positive) imbalance."],["Inspect","Trait for providing balance-inspection access to a set of named fungible assets."],["InspectHold","Trait for inspecting a set of named fungible assets which can be placed on hold."],["InspectMetadata","Trait for reading metadata from a fungible asset."],["Mutate","Trait for providing a set of named fungible assets which can be created and destroyed."],["MutateHold","Trait for mutating a set of named fungible assets which can be placed on hold."],["Transfer","Trait for providing a set of named fungible assets which can only be transferred."],["Unbalanced","A fungible token class where the balance can be set arbitrarily."]],"type":[["CreditOf","Imbalance implying that the total_issuance value is greater than the sum of all account balances."],["DebtOf","Imbalance implying that the total_issuance value is less than the sum of all account balances."]]});