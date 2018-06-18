using System;

namespace lucidity {

    public static class UserMessages {

        public static string Conflict(string entityname) => $"The {entityname} has been changed, please reload and try again.";

    }
}