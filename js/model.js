// model

const model = {

    characters: [
        
        {
            id: 1,
            name: "Bloodhound",
            role: "Technological Tracker",
            class: "Recon: Can gather valuable intel, such as enemy whereabouts or the next ring location.",
            passive: "Tracker: See tracks left behind by your foes",
            tactical: "Eye of the Allfather: Briefly reveal hidden enemies, traps, ans clues throughout structures in front of you",
            ultimate: "Beast of the Hunt: Enhances your senses, allowing you to move faster and highlight your prey",
            img: "images/bloodhound.jpg",         
        },
    
                
        {
            id: 2,
            name: "Gibraltar",
            role: "Shielded Fortress",
            class: "Defensive: Can provide cover or fortify an area, making it safer for their squad.",
            passive: "Gun Shield: Aiming down sights deploys a gun shield that blocks incoming fire",
            tactical: "Dome of Protection: Throw down a dome shield that blocks attacks",
            ultimate: "Defensive Bombardment: Call in a concentrated mortar strike on a marked position",
            img: "images/gibby.jpg",      
        },

        {
            id: 3,
            name: "Lifeline",
            role: "Combat Medic",
            class: "Support: Can aid their squad by providing healing or loot.", 
            passive: "Combat Medic: Deploy D.O.C. to revive teammates, leaving you fre to move and defend",
            tactical: "D.O.C. Heal Drone: Call your D.O.C. to automaticallt heal nearby teammates over time",
            ultimate: "Care Package: Call in a drop pod full of high-quality defensive gear",
            img: "images/lifeline.jpg",       
        },

        {
            id: 4,
            name: "Pathfinder",
            role: "Forward Scout",
            class: "Recon: Can gather valuable intel, such as enemy whereabouts or the next ring location.",
            passive: "Insider Knowledge: Scan a survey beacon to reveal the rings next position",
            tactical: "Grappling hook: Grapple to get out-of-reach places quickly",
            ultimate: "Zipline Gun: Create a zipline for everyone to use",
            img: "images/pathy.jpg",        
        },

        {
            id: 5,
            name: "Wraith",
            role: "Interdimensional Skirmisher",
            class: "Offensive: Has abilities that are useful in combat.",  
            passive: "Voices from the Void: A voice warns you when danger approaches. As far as you can tell, it's on your side",
            tactical: "Into the Void: Reposition quickly through the safety of the void spaces, avoiding all damage",
            ultimate: "Dimensional Rift: Link two locations with portals for 60 seconds, allowing your entire team to use them",
            img: "images/wraith.jpg",        
        },

        {
            id: 6,
            name: "Bangalore",
            role: "Professional Soldier",
            class: "Offensive: Has abilities that are useful in combat.", 
            passive: "Double time: Taking fire while sprinting makes you move faster for a brief time",
            tactical: "Smoke launcher: Fire a high-velocity smoke canister that explodes into a smoke wall on impact",
            ultimate: "Rolling Thunder: Call in an artillery strike that slowly creeps across the landscape", 
            img: "images/bang.jpg", 
                  
        },

        {
            id: 7,
            name: "Caustic",
            role: "Toxic Trapper",
            class: "Defensive: Can provide cover or fortify an area, making it safer for their squad.",        
            passive: "Nox Vision: Allows you to see enemies through your gas",
            tactical: "Nox Gas Trap: Drop canisters that release deadly gas when shot or triggered by enemies",
            ultimate: "Nox Gas Grenade: Blankets a large area in gas",
            img: "images/caustic.jpg", 
        },

        {
            id: 8,
            name: "Mirage",
            role: "Holographic Trickster",
            class: "Offensive: Has abilities that are useful in combat.",        
            passive: "Now you see me...: Automatically cloak when using Respawn Beacons and reviving enemies",
            tactical: "Psyche out: Send out a holographic decoy to confuse the enemy",
            ultimate: "Life of the Party: Deploy a team of decoys to distract the enemies",
            img: "images/mirage.jpg", 
        },

        {
            id: 9,
            name: "Octane",
            role: "High-Speed Daredevil",
            class: "Offensive: Has abilities that are useful in combat.",  
            passive: "Swift Mend: Automatically restores health over time",
            tactical: "Stim: Move 30% faster for six seconds. Costs health to use",
            ultimate: "Launch Pad: Deploy a jump pad that catapults teammates through the air",
            img: "images/octane.jpg",       
        },

        {
            id: 10,
            name: "Wattson",
            role: "Static Defender",
            class: "Defensive: Can provide cover or fortify an area, making it safer for their squad.",
            passive: "Spark of Genius: Ulitimate Accelerants fully charge your ulitimate ability",
            tactical: "Perimeter Security: Connect nodes to create electrified fences that damage and slow enemies",
            ultimate: "Interception Pylon: Place an electrified pylon that destroys incoming ordnance and repairs damaged shields",
            img: "images/wattson.jpg",         
        },

        {
            id: 11,
            name: "Crypto",
            role: "Surveillance Expert",
            class: "Recon: Can gather valuable intel, such as enemy whereabouts or the next ring location.",
            passive: "Neurolink: Enemies detected by the drone within 30 meters of your position are marked for you and your teammates to see.",
            tactical: "Surveillance Drone: Deploy an aerial drone that allows you to view the surrounding area from above. If the drone is destroyed, there is a 40 second cooldown before you can deploy another.",
            ultimate: "Drone EMP: Your drone sets off an emp blast that deals shield damage, slows enemies, and disables traps.",
            img: "images/crypto.jpg",         
        },

        {
            id: 12,
            name: "Revenant",
            role: "Synthetic Nightmare",
            class: "Offensive: Has abilities that are useful in combat.",
            passive: "Stalker: You crouch-walk faster and can climb higher than other legends.",
            tactical: "Silence: Throw a device that deals damage and disables enemy abilities.",
            ultimate: "Death Totem: Drop a totem that protects those who use it from death for a set amount of time. Instead of being killed or downed, users will return to the totem.",
            img: "images/rev.jpg",         
        },

        {
            id: 13,
            name: "Loba",
            role: "Translocating Thief",
            class: "Support: Can aid their squad by providing healing or loot.", 
            passive: "Eye for Quality: Nearby epic and legendary loot can be seen through walls. The range is the same as the black market boutique.",
            tactical: "Burglar's Best Friend: Teleport to hard-to-reach places or escape trouble quickly by throwing your jump drive bracelet.",
            ultimate: "Black Market Boutique: Place a portable device that allows you to teleport nearby loot to your inventory. Each friendly and enemy legend can take up two items.",
            img: "images/loba.jpg",        
        },

        {
            id: 14,
            name: "Rampart",
            role: "Base of Fire",
            class: "Defensive: Can provide cover or fortify an area, making it safer for their squad.",
            passive: "Modded Loader: Increased magazine capacity and faster reloads when using LMGs and the minigun.",
            tactical: "Amped Cover: Build a crouch-cover wall, which deploys a full-cover amped wall that blocks incoming shots and amps outgoing shots.",
            ultimate: "Emplaced Minigun or Sheila: Place a mounted machine gun that anyone can use. High ammo capacity, long reload time.",
            img: "images/rampart.jpg",         
        },

        {
            id: 15,
            name: "Horizon",
            role: "Gravitational Manipulator",
            class: "Offensive: Has abilities that are useful in combat.",
            passive: "Spacewalk: Increase air control and reduce fall impacts with Horizon's custom spacesuit.",
            tactical: "Gravity Lift: Reverses the flow of gravity, lifting players upwards and boosting them outwards when they exit.",
            ultimate: "Black Hole: Deploy N.E.W.T. to create a micro black hole that pulls players in towards it, and hits them with a graviton blast at the end.",
            img: "images/horizon.jpg",         
        },

        {
            id: 16,
            name: "Fuse",
            role: "Explosives Enthusiast",
            class: "Offensive: Has abilities that are useful in combat.",
            passive: "Grenadier: Stack an extra grenade per inventory slot. Fire grenades farther, faster, and more accurately.",
            tactical: "Knuckle Cluster: Launch a cluster bomb that continuously expels airburst explosives on impact.",
            ultimate: "The Motherlode: Launch a bombardment that encircles a target area in a wall of flame.",
            img: "images/fuse.jpg",         
        },

        {
            id: 17,
            name: "Valkyrie",
            role: "Winged Avenger",
            class: "Recon: Can gather valuable intel, such as enemy whereabouts or the next ring location.",
            passive: "Vtol Jets: Use jetpack to fly. Fuel is limited but refills overtime.",
            tactical: "Missile Swarm: Fire a swarm of mini-rockets that damage and disorient the enemy.",
            ultimate: "Skyward Dive: Launch into the air and sky dive. Allies can hook into take-off systems to join you.",
            img: "images/valk.png",         
        },
        
    ],

    teamView: '',
        team: [
            {
                id: '',
            },

        
        ],

};









/* const model = {

    disker: [
        {
            merke: "innova",
            model: "star",
            år: 2020,
            farge: "hvit",
            vekt: 175,
        },
    
    ],

}; */

/* "Bloodhound", "Gibraltar", "Lifeline", "Pathfinder", "Wraith", "Bangalore", 
"Caustic", "Mirage", "Octane", "Wattson", "Crypto", "Revenant", 
"Loba", "Rampart", "Horizon", "Fuse", "Valkyrie" */