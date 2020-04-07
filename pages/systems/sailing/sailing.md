---
layout: default
title: The Azure Art of Sailing
permalink: /systems/sailing/
parent: Systems
nav_order: 10
has_children: true
---

# The Azure Art of Sailing

**This sailing rework is an active development effort.** All rules are subject
to sudden change.

These rules offer a mechanical development for all ships: sailing boats,
rowing boats, flying boats, etc. They are appropriate for use in any vehicular
operation which includes a captain and (possibly) crew.

## Ship Statistics

All ships are classified with the following statistics.

### Health

<!--TODO: add links to ship actions -->
A normal ship has thirty health levels: five -0 health levels, five -1 health
levels, ten -2 health levels, and en -4 health levels. An incapacitated ship is
not sunk; rather, it is rendered immobile and is taking on water. While
incapacitated, the captain cannot spend tempo and the only available
ship-specific action is Remove Bilge.

Repairing the ship is a craft project. Simple repairs sufficient to render an
incapacitated ship able to limp back to port are a basic project. More expansive
repairs are a major project, with each success repairing a single health level.
A superior project (rating 2 for large-scale construction) can repair the ship
to full operating functionality in one go.

As long as resources are available, the ship passively heals one health level
every two days while docked.

### Weight and Size

_Weight_ measures a ship's heft, while the ship's _maximum Size_ represents the
amount of crew and cargo it can hold.

| Description       | Weight | Maximum Size |
| :---------------- | :----- | :----------- |
| Rowboat           | 0      | 1            |
| Small craft       | 1      | 3            |
| Medium craft      | 3      | 5            |
| Large craft       | 5      | 7            |
| City or City-ship | 7      | Plenty       |

Rowboats are considered Tiny when compared to other vessels.

> **Tiny Vessel:** This vessel adds +2 Evasion against any attack made by a
> larger vessel. The crew of the larger vessel subtracts 2 successes from their
> attempts to notice this vessel during combat operations.

Medium craft and larger have Legendary Size.

> **Legendary Size**: This vessel does not take Onslaught penalties inflicted by
> enemies without Legendary Size. This vessel cannot be reduced below 1
> Initiative from attacks by enemies without Legendary Size, unless that attack
> deals 10 or more raw damage; the attacker still gets all their Initiative.
> It cannot take more **decisive** damage in a single attack than the attacker's
> (Strength + 3). It cannot be grappled by enemies without Legendary Size. It
> cannot be staggered or knocked back with smashing attacks from attackers
> without Legendary Size. If it engages another entity with Legendary Size,
> neither gains the benefits of Legendary Size.

A boat has (maximum Size) slots for crew and cargo. A battlegroup requires one
slot per size; a size 3 group requires 3 slots, etc. Size 5 battlegroups cannot
be housed on a ship other than a city-ship; they must be broken into multiple
Size 4 groups across multiple ships.  **Vast Wealth**, an
**Incredible Treasure**, or other **Specialty Goods** take up 1 slot each.

### Armament

A normal ship has ranged capability. In most circumstances, this is a complement
of archers who release volleys of (possibly flaming) arrows targeting the enemy
ship. Larger vessels, especially huge ships of the Realm, mount ballistae which
can fire heavy bolts to sink enemy ships. A few of the most powerful ships,
especially in the Fire Fleet, mount flame cannons which spew huge gouts of fire.

All shipboard weaponry, under normal circumstances, has the following stats:

> **Shipboard Weaponry**: Accuracy -5/-3/+4/+2/+0; Damage 15; OVW 3.

Your ship itself is also a weapon. In most cases, your objective is not to
whittle the enemy ship down with ranged broadsides, but rather to ram your
opponent and board them or crack their ship in half to sink them.

## Operation

### Normal Operation

Under normal circumstances, the ship simply functions. The captain is competent,
the crew are effective, and the day-to-day of the ship just happens. No rolls or
narrative complications are expected during normal operation.

### Exceptional Operation

When the possibility of the ship failing in its tasks becomes narratively
interesting, the ship enters a period of _exceptional operation_. Examples of
exceptional operation include operating in storms, navigating through a
dangerous straight, rounding the horn on choppy water, pursuing a ghost ship
through the underworld currents, etc.

During exceptional operation, the captain is responsible for all rolls ensuring
the safe operation of the vessel. When rolling, she may use any of her
Attributes, based on her description; effectively ordering the crew to response
may be social, seizing the wheel herself and steering through dark water may
be physical, and outwitting her pursuer through tricky maneuvering is probably
mental.

The crew of a ship has their own skill and experience, and are able to operate
at a basic level of efficacy even under the command of a novice captain. As long
as your crew consists of **experienced sailors**, **wizened shellbacks**, and
**able crewmen**, you get +2 on your Sail roll to a maximum of 5 Sail.

### Combat Operation

When the life and livelihood of the ship are in direct danger, the ship enters
_combat operation_. Combat operation is fully explained in the
[shipboard combat](/systems/sailing/combat) section.
